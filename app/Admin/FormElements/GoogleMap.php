<?php
namespace App\Admin\FormElements;
use SleepingOwl\Admin\Models\Form\Interfaces\FormItemInterface;

class GoogleMap implements FormItemInterface
{
    protected $label;

    /**
     * @return string
     */
    public function render()
    {
        $instance = Admin::instance()->formBuilder->getModel();
        if ($instance->exists)
        {
            return "You are editing existing {$this->label}.";
        } else
        {
            return "You are creating new {$this->label}.";
        }
    }
    public function setLabel($label)
    {
        $this->label = $label;
        return $this;
    }
    /**
     * @return string
     */
    public function getName()
    {
        return "Google Map";
    }

    /**
     * @return array|null
     */
    public function getValidationRules()
    {
        // TODO: Implement getValidationRules() method.
    }

    /**
     * @return mixed
     */
    public function getDefault()
    {
        // TODO: Implement getDefault() method.
    }

    /**
     * @param array $data
     */
    public function updateRequestData(&$data)
    {
        // TODO: Implement updateRequestData() method.
    }
}